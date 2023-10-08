import { useNavigate, useParams } from "react-router-dom"
import { Product, ProductForm as UpdateInfo } from "../../types";
import { ProductForm as ProductUpdate } from "../../components";
import { useCallback, useEffect, useState } from "react";


const ProductEdit = () => {
    const navigate = useNavigate()
    const [categories, setCategories] = useState<Product>()
    const apiUrl = import.meta.env.VITE_REACT_APP_BASE_CATEGORY_URL;
    const token = localStorage.getItem('authToken')
    const { id } = useParams()

    const getCategory = useCallback(
        async () => {
            try {
                const fetchUpdate = await fetch(`${apiUrl}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    },

                });
                if (fetchUpdate.ok) {

                    const response: Product = await fetchUpdate.json()
                    setCategories(response)
                    
                } else {

                    console.log("Error getting data..")
                }
            } catch (error) {
                console.error(error)
            }
        },[]
    )

    useEffect(
        () => {
            getCategory()
        },[getCategory]
    )

    const handleUpdate = async (values: UpdateInfo) => {
        console.log(values)
        try {
            const response = await fetch (`${apiUrl}update`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ ...values, id:id })
            })
            if (response.ok) {
                console.log(response)
                console.log("successs")
                navigate('/');  
            } else {
                console.log("Failed to edit product")
                return
            }
   
        } catch (error) {
            console.error(error)
            alert("Failed to Edit Product")
        }  
      }

    if(categories) {
        return <ProductUpdate onSubmit={handleUpdate} content={"Edit Product"} />
  
}
    return null 
}

export default ProductEdit