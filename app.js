

const elem = React.createElement(
    'h1' , {id:'parent'} , React.createElement(
        'h2' , {id:'child'} ,
         "Namaste Pulki!!"))
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(elem)