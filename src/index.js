#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: "list",
    name: "action",
    message: "What you want to do?",
    choices: [
      {
        name: `Send me an ${chalk.green.bold("email")}?`,
        value: () => {
          open("mailto:hello@varunherlekar.com");
          console.log("\nDone, see you soon.\n");
        }
      },
      {
        name: "Just quit.",
        value: () => {
          console.log("Ok, bye.\n");
        }
      }
    ]
  }
];

const data = {
  name: chalk.bold.green("        Hello Coders, I'm Varun Herlekar"),
  handle: chalk.white("@varunh"),
  work: `${chalk.white("WordPress Developer | Digital Marketer | CyberSecurity Enthusiast")} ${chalk
    .hex("#2b82b2")
    .bold(" | Freelancer")}`,
  blog: chalk.blue("https://blog.varunherlekar.com"),
  twitter: chalk.gray("https://twitter.com/") + chalk.cyan("varun.herlekar.9"),
  npm: chalk.gray("https://npmjs.com/") + chalk.red("~varunherlekar"),
  github: chalk.gray("https://github.com/") + chalk.green("varunherlekar"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("varunherlekar"),
  instagram: chalk.gray("https://instagram.com/") + chalk.yellow("varunherlekar"),
  dribble: chalk.gray("https://dribbble.com/") + chalk.redBright("varunherlekar"),
  web: chalk.cyan("https://varunherlekar.com"),
  npx: chalk.red("npx") + " " + chalk.white("varunh"),

  labelWork: chalk.white.bold("       Work:"),
  labelBlog: chalk.white.bold("     Blog:"),
  labelTwitter: chalk.white.bold("    Twitter:"),
  labelnpm: chalk.white.bold("        npm:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelInstagram: chalk.white.bold("   Instagram:"),
  labelDribbble: chalk.white.bold("   Dribbble:"),
  labelWeb: chalk.white.bold("        Portfolio:"),
  labelCard: chalk.white.bold("       Card:")
};

const me = boxen(
  [
    `${data.name} / ${data.handle}`,
    ``,
    `${data.labelWork}  ${data.work}`,
    `${data.labelBlog}  ${data.blog}`,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelnpm}  ${data.npm}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelInstagram}  ${data.instagram}`,
    `${data.labelDribbble}  ${data.dribble}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    `${data.labelWeb}  ${data.web}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk.italic(
      "I'm curious, enthusiastic and student most of the time."
    )}`,
    `${chalk.italic("The rest of the time I write code that others can read.")}`
  ].join("\n"),
  {
    margin: 1,
    float: 'center',
    padding: 1,
    borderStyle: "single",
    borderColor: "cyan"
  }
);

console.log(me);
const tip = [
  `Tip: Try ${chalk.cyanBright.bold(
    "cmd/ctrl + click"
  )} on the links above`,
  '',
].join("\n");
console.log(tip);


prompt(questions).then(answer => answer.action());
