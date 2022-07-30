# Monster Rolodex

This is the app that I created when I was going through the React Basics Section of the Udemy react Course.

[React Course](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/29209638)

## Current Progress

I stopped on lesson 49. But I wanna go back and review the creation of the separate components.

In lesson 49 we begin to style the app having completed all the functionality.

# First thing

The first thing we did was run the npm command

    npx create-react-app monster-rolodex

This installed the correct files and folders to get the app started.

Then I ran

    npm start

To start the development server.

# Now we are creating our app

**Side Note:** I realized early on that when I did a console.log it would print twice to the console. This
was rather annoying and i wanted to determine why it was doing that. Turns out it is a function of `<React.StrictMode>` . This is on purpose, it's part of React.StrictMode (specifically to detect unexpected side effects).

Strict mode can’t automatically detect side effects for you, but it can help you spot them by making them a little more deterministic. This is done by intentionally double-invoking the following functions:

- Class component constructor, render, and shouldComponentUpdate methods
- Class component static getDerivedStateFromProps method
- Function component bodies
- State updater functions (the first argument to setState)
- Functions passed to useState, useMemo, or useReducer

If you remove the StrictMode element from **index.js**, you'll see the output only gets logged once.

## Class Components

To setup a class component we had to import the component library

    import { component } from "react"

Then we can setup the class component

    class App extends Component {

        constructor()

        render() {
            return (
                JSX STUFF
            )
        }
    }

### Methods of Class Components

There is an order to these methods on when react runs them. The **constructor** method is always the
first thing to run in any class. The main thing that is always doen within the constructor function is
to initialize the **state**.

Then the **render** function runs.

Then the **componentDidMount** function runs. This is a LifeCycle Method

#### Constructor

Now to be able to use JS variables in this component we must setup a constructor

    constructor() {
        super();

        this.state = {
            name: "Jarett",
            age: 23,
        }
    }

Now we havve access to this object in the code using the **this.state.whatever** object reference.

#### ComponentDidMount

This method is used when you are retrieving data from an external API. This makes sure that the
fetching of that data is done at the beginning, when the component first mounts.

#### Render Method

Within this method is where the component is rendered by react.

```

```
