import React, {useCallback, useContext, useEffect, useState} from 'react';
import {useHttp} from "../hooks/http.hook";
import {LinksList} from "../components/LinksList";
import {AuthContext} from "../Context/AuthContext";

export const LinksPage = (props) => {
    const {token} = useContext(AuthContext);
    const {request, loading} = useHttp()
    const [links, setLinks] = useState(null)
    const getLinks = useCallback(async ()=>{
        try{
            const fetchLinks = await request('/api/link', 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setLinks(fetchLinks)
        }
        catch (e){}
    },[token, request])
    useEffect(()=>{
        getLinks()
    },[getLinks])
    if(loading){
        return <div>loading...</div>
    }

    return (<div>
        {!loading &&  links && <LinksList links={links} />}
    </div>);

}