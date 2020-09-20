import {useEffect, useState} from 'react'
import {firestore} from '../firebase/firebase.utils'

export default function useContent(target){
    const [content, setContent] = useState([])

    useEffect(() => {
        firestore
                .collection(target)
                .get()
                .then((snapshot) => {
                    const allContent = snapshot.docs.map((contentObj) => ({
                        ...contentObj.data(),
                        docId: contentObj.id
                    }))

                    setContent(allContent)
                })
                .catch((error) => {
                    console.log(error.message)
                })
    }, [])

    return { [target]: content}
}