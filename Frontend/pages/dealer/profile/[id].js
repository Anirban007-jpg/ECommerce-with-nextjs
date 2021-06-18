import React from 'react'
import {withRouter} from 'next/router'
import Dashboard from '../../../components/dealer/Dashboard';
import { getspecuser } from '../../../actions/user';
import {useEffect, useState} from 'react';
import UpdateProfile from '../../../components/profile/UpdateProfile';
import Head from 'next/head';
import { API_NAME, DOMAIN } from "../../../config";

const update = ({router, user}) => {


    const head = () => (
        <Head>
            <title>Profile Update Page | {API_NAME}</title>
            <meta name="description"/>
            <link rel="canonical" href={`${DOMAIN}/dealer/profile/${router.query.id}`} />
            <meta property="og:title" content={`Profile Update Page | ${API_NAME}`} />
            <meta name="og:description" content="This is the Profile Update Page of dealer" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${DOMAIN}/dealer/profile/${router.query.id}`} />
            <meta property="og:site_name" content={`${API_NAME}`} />
            <meta property="og:image:secure_url" />
            <meta property="og:image:type" content={"image/jpg"} />
        </Head>
    )

    // Load by method
    // const [userbymethod, setUserByMethod] = useState([]);
    
    // // acts like componentdidMount
    // useEffect(() => {
    //     getUser()
    // }, []);

    // // created by method and state set locally
    // const getUser = () => {
    //     getspecuser(router.query.id).then(data => {
    //         if (data.error){
    //             console.log(data.error);
    //         }
    //         else {
    //                 setUserByMethod(data.user);
    //         }
    //     })
    // } 

    return (
        <>
          {head()}
            <Dashboard>
                <div className="canvas">
                    <h2 className="heading1">Update User Profile</h2>
                </div>
                {/* {JSON.stringify(user)} */}
                <UpdateProfile user={user} />
            </Dashboard>
        </>
    )
}

// getting data from server(SSR)
update.getInitialProps = ({query}) => {
    return getspecuser(query.id).then(data => {
        if (data.error){
            console.log(data.error);
        }
        else {
            return {
                user: data.user
            }
        }
    })
}

// export async function getServerSideProps({req, res, query}) {
//     const response = await getspecuser(query.id)
//     console.log(response, "all data")
  
//     return {
//         props: {
//           allEmails: response.data
//         }
//     }
//   }

export default withRouter(update)
