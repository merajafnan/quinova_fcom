import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { FaFilter } from "react-icons/fa";

const Menu = () => {

    const [menu, setMenu] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortOption, setSortOption] = useState('default');

    //Loading data
    useEffect(() => {
        //   Fetch data from backend
        const fetchData = async () => {
            try {
                const response = await fetch("/menu.json")
                const data = await response.json();
                // console.log(data);
                setMenu(data);
                setFilteredItems(data);

            } catch (error) {
                console.log(error);
            }
        }

        // call the function
        fetchData();
    }, [])


    //  Filtering Data based on categories
    const filterItems = (index) => {
        const filtered =
            index === "all" ? menu :
                menu.filter((item) => item.category === index);

        setFilteredItems(filtered);
        setSelectedCategory(index);
    };

    // Show All Data
    const showAll = () => {
        setFilteredItems(menu);
        setSelectedCategory("all");
    }

    // Sorting based on A-Z, Z-A, Low to High or High to Low

    const handleSortChange = (option) => {
        setSortOption(option);

        let sortedItems = [...filteredItems]

        switch (option) {
            case "A-Z":
                sortedItems.sort((a, b) =>
                    a.name.localeCompare(b.name))
                break;
            case "Z-A":
                sortedItems.sort((a, b) =>
                    b.name.localeCompare(a.name))
                break;
            case "Low to High":
                sortedItems.sort((a, b) =>
                    (a.price - b.price))
                break;
            case "High to Low":
                sortedItems.sort((a, b) =>
                    (b.price - a.price))
                break;
            default:
                // code block
                break;
        }

        setFilteredItems(sortedItems);

    }




    return (
        <div>
            {/* Menu banner */}
            <div className='section-container bg-gradient-to-r  from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>

                <div className="py-48 flex flex-col  items-center justify-center gap-8">
                    {/* content */}
                    <div className='text-center space-y-7 px-4' >
                        <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug'>
                            Dive into Delights Of Delectable <span className='text-green'>Food</span>
                        </h2>
                        <p className=' text-xl text-[#4A4A4A] md:w-4/5 mx-auto'>
                            Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
                        </p>
                        <button className='btn bg-green px-8 py-3 font-semibold text-white rounded-full '>Order Now</button>
                    </div>
                </div>

            </div>

            {/* Menu Shop */}
            <div className='section-container'>
                {/* Sort and Filter Button */}
                <div className='flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8'>
                    {/* All Categories Button */}
                    <div className='flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap'>
                        <button onClick={showAll} className={selectedCategory == "all" ? "active" : ""}>All</button>
                        <button onClick={() => filterItems("salad")} className={selectedCategory == "salad" ? "active" : ""}>Salad</button>
                        <button onClick={() => filterItems("pizza")} className={selectedCategory == "pizza" ? "active" : ""}>Pizza</button>
                        <button onClick={() => filterItems("soup")} className={selectedCategory == "soup" ? "active" : ""}>Soups</button>
                        <button onClick={() => filterItems("dessert")} className={selectedCategory == "dessert" ? "active" : ""}>Dessert</button>
                        <button onClick={() => filterItems("drinks")} className={selectedCategory == "drinks" ? "active" : ""}>Drinks</button>
                    </div>

                    {/* Sorting Filter */}
                    <div>
                        <div className='bg-black p-2'>
                            <FaFilter className='h-4 w-4 text-white'/>
                        </div>

                        {/* Sorting Options */}
                        <select id="sort"
                            onChange={(e) => handleSortChange(e.target.value)}
                            value={sortOption} className="bg-black text-white px-2 py-1 rounded-sm">
                            <option value="default">Default</option>
                            <option value="A-Z">A-Z</option>
                            <option value="Z-A">Z-A</option>
                            <option value="Low to High">Low to High</option>
                            <option value="High to Low">High to Low</option>
                        </select>
                    </div>
                </div>

                {/* Product cart */}
                <div className='grid md:grid-cols-4 sm:grid-cols-1 grid-cols-1 gap-4'>
                    {
                        filteredItems.map((item) => (
                            <Card key={item._id} item={item}></Card>
                        ))
                    }

                </div>

            </div>
        </div>
    )
}

export default Menu