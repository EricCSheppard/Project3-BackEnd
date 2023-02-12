# App Title

## Overview
---


## Technologies used
---


## User Stories

    As a user I want the ability to sign up with email and password
    As a user I want the ability to sign in with email and password
    As a user I want the ability to sign out with email and password
    As a user I want the ability to create a goal in my to-do list
    As a user I want the ability to select the subcategory of my goal
    As a user I want the ability to give my goal a 'what' (name of goal )
    As a user I want the ability to give my goal a 'why' (description of goal)
    As a user I want the ability to give my goal a 'when' (deadline for completion)
    As a user I want the ability to mark a goal as completed when finished
    As a user I want the ability to mark my goal as public or private
    As a user I want the ability to see other user's public goals
    As a user I want the ability to see a list of my uncompleted and completed goals
    As a user I want the ability to edit and delete goals

## Route Tables for Documents
---
## Users

| URL       |   HTTP Verb|  Action |
| ----------- | ----------- | ----|
| /users/signup     | GET       | new      |
| /users/signup  |    POST      | create     |
| /users/login  |    GET      | login     |
| /users/login  |    POST      | create     |
| /users/logout  |    POST     | destroy     |

## Goals

| URL       |   HTTP Verb|  Action |
| ----------- | ----------- | ----|
| /goals/new  |    POST     | create     |
| /goals/:id  |    GET      | show     |
| /goals/user  |    GET      | index     |
| /goals/edit/:id |    PUT      | update     |
| /goals/:id |    DELETE      | destroy     |

## Comments

| URL       |   HTTP Verb|  Action |
| ----------- | ----------- | ----|
| /comments/:userId     | POST       | create      |
| /comments/delete/:userId/:commentId  |    DELETE     | destroy     |