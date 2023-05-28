import wordleImg from "../../../assets/img/wordle.png";
import conduitImg from "../../../assets/img/conduit.png";
import converterImg from "../../../assets/img/converter.png";
import todoImg from "../../../assets/img/todo.png";

export const projectsData = [
  {
    slug: "wordle-game",
    title: "Wordle Game",
    img: wordleImg,
    technologies: ["React", "Typescript", "Javascript", 'SCSS'],
    description:
      `
      This application is a clone of the original Wordle game, written in React and Typescript
      The playing field is a set of 6 rows and 5 columns of empty fields corresponding to the letters of the puzzled word.
      After each attempt the system checks the guessed letters and their positions. 
      <br/>
      <br/>
      If the player guessed the right letter and it is in the right position, it is highlighted in green.
       If the player guessed the letter correctly but it is in the wrong position, it is highlighted in yellow. 
       If the letter is not guessed, the field becomes gray.
       <br/>
       <br/>
       The player has only 6 tries to guess the word. If the player could not guess the word after 6 tries,
      the game reports that the player has lost. If the player guessed the word, the game congratulates him
        on his victory.
       `,
    demoLink: "https://wordle-game-demo.netlify.app/",
    codeLink: "https://github.com/uxknow/wordle-game",
  },
  {
    slug: "conduit",
    title: "Conduit",
    img: conduitImg,
    technologies: [
      "React",
      "Typescript",
      "Redux Toolkit",
      "Javascript",
      "RTK Query",
      "Tailwind",
      "RealWorld API",
    ],
    description: `
    This application is an example of a web application that demonstrates the 
    use of advanced technology and real-world project development practices. 
    The application is built using a modern stack of technologies such as React,
     TypeScript, Redux Toolkit, RTK Query, and Tailwind. RealWorld API is used 
     as a data source, providing dummy data to demonstrate the functionality of the site.
     <br/>
     <br/>
     <h4 class='font-semibold mb-4'>General functionality:</h4>
     <ul class='flex flex-col gap-2 list-decimal list-inside pl-4'>
      <li>
        Authenticate users via JWT (login/signup pages + logout button on settings page).
      </li>
      <li>
        GET and display paginated lists of articles. The main page has pagination, 
        which allows you to view a large amount of content gradually. There is also 
        functionality to switch by hashtags, which allows the user to filter posts by 
        topics of interest.
      </li>
      <li>
        CRU- users (sign up & settings page - no deleting required). The user can change 
        their details, such as password, email, and name, on the settings page. It is also
         possible to change the user's avatar.
      </li>
      <li>
        CRUD Articles. Authorized users have access to the page for creating new articles,
         editing and deleting existing ones.
      </li>
      <li>
        CR-D Comments on articles (no updating required)
      </li>
      <li>
        Favorite articles.
      </li>
      <li>
        Follow other users. When subscribing to another user, a tab appears on the home page 
        with the tracked users' posts, allowing users to keep up to date with the latest updates.
      </li>
      <li>
        The user profile contains information about himself and two tabs: "Personal Articles" and "Favorite articles".
      </li>
     </ul>
     <br/>
     And saving data when the page reloads. So after refreshing the page the user will save his preferences, settings and interactions with the articles.
     `,
    demoLink: "https://react-vite-rtk-query-realworld.netlify.app/",
    codeLink: "https://github.com/uxknow/conduit",
  },
  {
    slug: "currency-converter",
    title: "Currency Converter",
    img: converterImg,
    technologies: ["Javascript", "CSS", "NBU API"],
    description: `Currency Converter, written in JavaScript, is a handy tool for fast and 
      accurate currency conversion. It has a simple interface, 
      consisting of two input fields and two drop-down lists where the user
      can select the currencies to be converted.
      <br/>
      <br/>
      The user can enter an amount in the first field and select the initial 
      currency from the first list. Then, by selecting the desired currency from 
      the second list, he will receive the equivalent amount in the selected currency. 
      The converter updates the result instantly whenever the input data changes.
      <br/>
      <br/>
      The converter uses the API to obtain up-to-date exchange rate data. 
      The API provides access to reliable sources of currency data, such as NBU. 
      This allows the user to always have up-to-date information about currency 
      conversion and guarantees the accuracy of the results. 
      `,
    demoLink: "https://uxknow.github.io/currency-converter/",
    codeLink: "https://github.com/uxknow/currency-converter",
  },
  {
    slug: "toDo",
    title: "ToDo",
    img: todoImg,
    technologies: ["Javascript", "CSS"],
    description: `
        This app was built using Javascript, CSS and hosted on GitHub pages.
        The application has four tabs: "All", "Pending", "Completed" and
        "Deleted", allowing you to efficiently manage your tasks. The
        application also uses local storage to save data, ensuring that
        information is preserved even after page reloads.
        <br />
        <br />
        <p class='mb-2'>The main features and functionality of the application include:</p>
        <ol class='flex flex-col gap-4 list-decimal list-inside pl-4'>
          <li>
            Adding tasks:
            <ul class='list-disc list-inside pl-4'>
              <li>
                The application has an "Add" button that allows you to enter
                new tasks.
              </li>
              <li>
                After adding a task, it appears in the corresponding tab
                depending on its status.
              </li>
            </ul>
          </li>
          <li>Task display:
          <ul class='list-disc list-inside pl-4'>
            <li>The "All" tab shows all tasks, including pending, completed, and deleted ones.</li>
            <li>The "Pending" tab only displays pending tasks that have not yet been completed.</li>
            <li>The "Completed" tab displays only completed tasks.</li>
            <li>The "Deleted" tab displays only deleted tasks.</li>
            </ul>
          </li>
          <li>Task management:
            <ul class='list-disc list-inside pl-4'>
              <li>Each task is represented by a list item containing information about it, such as a title or description.</д>
              <li>You can mark a task as completed or pending by clicking the appropriate radio button or checkbox.</li>
              <li>It is also possible to delete a task by clicking on the "Delete" button next to it.</li>
            </ul>
          </li>
          <li>Data saving:
            <ul class='list-disc list-inside pl-4'>
              <li>Task data is stored in the local storage of the browser.</li>
              <li>When the page is reloaded, the data is restored, which allows you to save the list of tasks and their status.</li>
            </ul>
          </li>
          <li>List clearing:
            <ul class='list-disc list-inside pl-4'>
              <li>The application provides a "Remove All" feature that allows you to remove all tasks from the list at once.</li>
              <li>After confirming deletion, all tasks will be deleted and the list will be cleared.</li>
            </ul>
          </li>
        </ol>
    `,
    demoLink: "https://uxknow.github.io/Todo/",
    codeLink: "https://github.com/uxknow/Todo",
  },
];
