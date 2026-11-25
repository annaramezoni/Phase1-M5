# Phase1-M5

# Auction Management System

A Node.js application for managing auction items, with two ways to use it:

- **CLI**: add, find, update, remove and list auction items, and seed or clear the database from the terminal.
- **API**: an Express server with an endpoint that searches auction items by keyword.

Both use the same MongoDB database and the same four item fields: `title`, `description`, `start_price` and `reserve_price`.

## Technologies Used

- Node.js
- Express – REST API.
- Commander.js – CLI command management.
- Inquirer.js – Interactive prompts for user input.
- MongoDB with Mongoose – Database and data models.

## Prerequisites

- [Node.js](https://nodejs.org/) (v22 or later)
- MongoDB running locally on `mongodb://localhost:27017`

## Installation

1. Clone the repository:

```bash
git clone <your-repository-url>
```

2. Navigate into the project directory:

```bash
cd <project-folder>
```

3. Install dependencies:

```bash
npm install
```

4. Seed the database with the sample data included in the repository (`data.json`):

```bash
node src/commands/commands.js seed
```

## Project Structure

```text
├── src/
│   ├── commands/        CLI commands (Commander.js)
│   ├── config/          Database connection
│   ├── controller/      CLI and API logic
│   ├── models/          Mongoose schema for auction items
│   └── routes/          API routes
├── data.json            Seed data
└── server.js            API entry point
```

## CLI

Run the CLI with:

```bash
node src/commands/commands.js <command>
```

### Optional: run it as `auction-cli`

To use the CLI from any folder, link it once from the project directory:

```bash
npm link
```

After that, type `auction-cli` before any command instead of `node src/commands/commands.js`:

For example, these two are equivalent:

```bash
node src/commands/commands.js seed
auction-cli seed
```

| Command        | Alias | Description                                      |
| -------------- | ----- | ------------------------------------------------ |
| `seed [file]`  | `s`   | Seed the database, optionally using a JSON file. |
| `clear`        | `c`   | Delete all auction items from the database.      |
| `add`          | `a`   | Add a new auction item.                          |
| `find <title>` | `f`   | Find auction items by title or description.      |
| `update <_id>` | `u`   | Update an existing auction item using its ID.    |
| `remove <_id>` | `r`   | Remove an auction item using its ID.             |
| `list`         | `l`   | Display all auction items.                       |
| `--version`    |       | Display the application version.                 |
| `--help`       | `-h`  | Display available commands and help information. |

### Command Examples

#### 1. Seed the Database

Populate the database with the sample auction items from `data.json`:

```bash
node src/commands/commands.js seed
```

or

```bash
auction-cli seed
```

To seed using your own JSON file (it must contain an array of items):

```bash
node src/commands/commands.js seed ./path/to/auction-items.json
```

or

```bash
auction-cli seed ./path/to/auction-items.json
```

#### 2. Clear the Database

Remove all auction items:

```bash
node src/commands/commands.js clear
```

or

```bash
auction-cli clear
```

#### 3. Add an Auction Item

```bash
node src/commands/commands.js add
```

or

```bash
auction-cli add
```

The application will interactively ask for:

- Title
- Description
- Starting price
- Reserve price

Example:

```text
Enter the title of the auction item: MacBook Pro
Enter the description of the auction item: 2023 MacBook Pro 14-inch
Enter the starting price of the auction item: 1000
Enter the reserve price of the auction item: 1500
```

#### 4. Find Auction Items

Search for items whose title or description contains a keyword (case-insensitive):

```bash
node src/commands/commands.js find "MacBook"
```

or

```bash
auction-cli find "MacBook"
```

#### 5. Update an Auction Item

Update an existing item using its MongoDB ID (use `list` to find it):

```bash
node src/commands/commands.js update <_id>
```

or

```bash
auction-cli update <_id>
```

The application will prompt you to enter the updated title, description, starting price, and reserve price.

#### 6. Remove an Auction Item

Remove an item using its ID:

```bash
node src/commands/commands.js remove <_id>
```

or

```bash
auction-cli remove <_id>
```

#### 7. List All Auction Items

Display all auction items stored in the database:

```bash
node src/commands/commands.js list
```

or

```bash
auction-cli list
```

### Input Validation

The application includes basic input validation for auction prices.

- Starting price must be a valid number.
- Reserve price must be a valid number.

If an invalid value is entered, the application displays an error message and asks the user to provide a valid number.

## API

Make sure MongoDB is running and the database has been seeded (see Installation), then start the server:

```bash
npm run dev
```

The server runs on `http://localhost:3000`.

### Search auction items

`GET /api/items?search=<keyword>`

- Matches the keyword against `title` and `description`, ignoring case.
- With no `search` parameter, it returns all items.
- Returns a JSON array of items with `title`, `description`, `start_price` and `reserve_price` (plus the MongoDB `_id` and timestamps).
- If nothing matches, it returns an empty array (`[]`).

Examples:

```text
http://localhost:3000/api/items
http://localhost:3000/api/items?search=gate
```

Example response:

```json
[
  {
    "_id": "6b06571546988ffbb1be2895",
    "title": "Heavy-Duty Galvanised Steel Gate 3.6m",
    "description": "Six-bar farm gate with chains and gudgeons",
    "start_price": 80,
    "reserve_price": 140
  }
]
```

## Version

Current version: **1.0.0**

## Author

Anna Ramezoni
