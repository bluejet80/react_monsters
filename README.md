# Monster Rolodex

This is the app that I created when I was going through the React Basics Section of the Udemy react Course.

[React Course](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/29209638)

# First thing

The first thing we did was run the npm command

    npx create-react-app monster-rolodex

This installed the correct files and folders to get the app started.

Then I ran

    npm start

To start the development server.

# Now we are creating our app

## Class Component

To setup a class component we had to import the component library

    import { component } from "react"

Then we can setup the class component

    class App extends Component {
        render() {
            return (
                JSX STUFF
            )
        }
    }

## Constructor

Now to be able to use JS variables in this component we must setup a constructor

    constructor() {
        super();

        this.state = {
            name: "Jarett",
            age: 23,
        }
    }

Now we havve access to this object in the code using the this.state.whatever object reference.

## setState() method

Now to alter the object we must use the setState() method,

    this.setState({name: "Peter", age: 88})

And we can create a button and use the onCLick method which takes a function

    onClick{()=>{DO SOMETHING}}

Thats what I know so far...
