import React, {Component} from 'react'

import axios from 'axios'

export default class ListTitleMenu extends Component {    

    constructor(props) {
        super(props);

        this.state = {            
            categories: [],       
        }
    }

    componentDidMount() {
        axios 
            .get('http://localhost:5000/category')
            .then(res => {
                const categories = res.data
                this.setState({categories})
            })
            .catch(error => {
                console.log("Kategori terdapat error", error)
            })
    }

    render() {
        const { categories } = this.state
        const { changeCategory } = this.props
        return (
            <>            
                {categories && categories.map((category) => (
                    <li style={{ cursor: "pointer", listStyleType: "none",}} key={category.uuid} category={category}  onClick={() => changeCategory(category.name)} className="nav-item">
                        <p className='nav-link'>{category.name}</p>
                    </li>                 
                ))}
            </>
        )   
    }
}
