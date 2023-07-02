import { useState, useEffect } from 'react'
import { ScrollView, Text,FlatList } from 'react-native'
import axios from 'axios';
import Photos from './Photos';
export default function AppGallery() {

    const [data, setData] = useState([]);

    useEffect(() => {

        axios.get('https://api.unsplash.com/photos/random?count=10&client_id=Lvt_EnQ4ThhQpVcojAzsNXIWR633JhW8qzRK8rXpGnM').then((res => {
            res.data.map(obj => { setData(prev => [...prev, obj]) })
            console.log("Data", res.data);
        }))
    }, [])



    return (
        <ScrollView>
            <FlatList
                numColumns={2}
                data={data}
                renderItem={({ item }) => <Photos link={item.urls.regular} name={item.user.name} />}
                keyExtractor={item => item.id}
            />
        </ScrollView>
    )
}
