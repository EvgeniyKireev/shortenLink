import React, {useCallback, useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {useHttp} from "../hooks/http.hook";
import {LinkCard} from "../components/LinkCard";
import {AuthContext} from "../Context/AuthContext";

export const DetailsPage = (props) => {
    const [link, setLink] = useState(null);
    const linkId = useParams().id;
    console.log(linkId);
    const {request,loading} = useHttp();
    const {token} = useContext(AuthContext);
    const getLink = useCallback(async () => {
        try {
            const fetched = await request(`/api/link/${linkId}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setLink(fetched)
        } catch (e) {}
    },[linkId, token, request]);
    useEffect(()=>{
        getLink()
    }, [getLink]);
    if (loading) {
        return <div>loading</div>
    }
    return (<div>{!loading && link && <LinkCard link={link} />}</div>);

}