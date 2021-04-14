import chalk from "chalk";
import { generateConsoleEligibleStatement } from "./utils.js";

export const infoLogger = (statement) => console.log(chalk.cyan.bold.italic(generateConsoleEligibleStatement(statement)));
export const errorLogger = (statement) => console.log(chalk.bold.red(generateConsoleEligibleStatement(statement)));
export const successLogger = (statement) => console.log(chalk.green.italic(generateConsoleEligibleStatement(statement)));
export const warningLogger = (statement) => console.log(chalk.keyword("orange")(generateConsoleEligibleStatement(statement)));
export const progressLogger = (statement) => console.log(chalk.yellow.italic(generateConsoleEligibleStatement(statement)));
export const blueLogger = (statement) => console.log(chalk.blueBright.italic(generateConsoleEligibleStatement(statement)));
