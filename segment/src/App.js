import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Analytics, AnalyticsBrowser, Context } from '@segment/analytics-next';

function App(props){
    const [analytics,setAnalytics] = useState(undefined);
    const [writeKey,setWriteKey] = useState('cdea2IlROc8CyXsGbljRsA0wHKHBmVDc');
    
    useEffect(()=>{
        const loadAnalytics = async ()=>{
            let [response] = await AnalyticsBrowser.load({writeKey})
            setAnalytics(response)
        }
        loadAnalytics()
    },[writeKey])

    const trackMe =(event)=>{
        console.log("tracking...")
        analytics && analytics.track("Hello World")
    }
    const pageMe =e=>{
        console.log("page...")
        analytics && analytics.page({
            title: 'testing home page',
            url: 'http://localhost:3000/',
            path: '/',
            referrer: 'https://segment.com/'
        });
    }
    return (
    <div>
        <h1>Track Analytics</h1>
        <button style={{margin:'10px'}}onClick={trackMe}>Track Me</button>
        <button onClick={pageMe}>Page Me</button>
    </div>
    )
}

export default App;