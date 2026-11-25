# Phase1-M5

# Auction Management System

A command-line application (CLI) built with Node.js that allows users to manage auction items. Users can add, find, update, remove, and list auction items, as well as seed or clear the database.

The application uses **Commander.js** to handle terminal commands and **Inquirer.js** to collect user input interactively.

## Technologies Used

- Node.js
- Commander.js – CLI command management.
- Inquirer.js – Interactive prompts for user input.
- MongoDB – Database for storing auction items. _(If applicable to your project.)_

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

## Running the Application

Run the CLI application using:

```bash
node <cli-file-name>.js
```

If you have configured a CLI executable in your `package.json`, you can also run it using your configured npm script.

## Available Commands

The application provides the following commands:

| Command        | Alias | Description                                      |
| -------------- | ----- | ------------------------------------------------ |
| `seed [file]`  | `s`   | Seed the database, optionally using a JSON file. |
| `clear`        | `c`   | Delete all auction items from the database.      |
| `add`          | `a`   | Add a new auction item.                          |
| `find <title>` | `f`   | Find an auction item by title.                   |
| `update <_id>` | `u`   | Update an existing auction item using its ID.    |
| `remove <_id>` | `r`   | Remove an auction item using its ID.             |
| `list`         | `l`   | Display all auction items.                       |
| `--version`    |       | Display the application version.                 |
| `--help`       | `-h`  | Display available commands and help information. |

## Command Examples

### 1. Seed the Database

Populate the database with auction items.

```bash
node <cli-file-name>.js seed
```

To seed using a JSON file:

```bash
node <cli-file-name>.js seed ./data/auction-items.json
```

### 2. Clear the Database

Remove all auction items:

```bash
node <cli-file-name>.js clear
```

### 3. Add an Auction Item

```bash
node <cli-file-name>.js add
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

### 4. Find an Auction Item

Search for an item by its title:

```bash
node <cli-file-name>.js find "MacBook Pro"
```

### 5. Update an Auction Item

Update an existing item using its MongoDB ID:

```bash
node <cli-file-name>.js update <_id>
```

The application will prompt you to enter the updated title, description, starting price, and reserve price.

### 6. Remove an Auction Item

Remove an item using its ID:

```bash
node <cli-file-name>.js remove <_id>
```

### 7. List All Auction Items

Display all auction items stored in the database:

```bash
node <cli-file-name>.js list
```

## Input Validation

The application includes basic input validation for auction prices.

- Starting price must be a valid number.
- Reserve price must be a valid number.

If an invalid value is entered, the application displays an error message and asks the user to provide a valid number.

## Version

Current version: **1.0.0**

## Author

[Your Name]
