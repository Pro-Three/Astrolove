// import { useSubscription } from '@apollo/client';
import React from 'react';
// import { useImage } from 'react-image';
import UserCard from '../components/userCards';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_USERS } from '../utils/queries';


// const styles = {
//     button: {
//         width: '150px',
//         height: '35px',
//         color: 'white',
//         marginTop: '10px',
//         marginBottom: '10px',
//         marginRight: '5px',
//         padding: "auto"
//     },
//     otherList: {
//         fontSize: '150%'
//     }
// }

// function MyImageComponent() {
//     const {src} = useImage({
//       srcList: 'https://cdn.theatlantic.com/media/mt/science/cat_caviar.jpg',
//     })

//     return <img src={src} />
// }

const Matches = () => {
    // const userEmail = localStorage.getItem('email')
    const { data, loading, error } = useQuery(QUERY_ALL_USERS);
    console.log(error);
    const allUsers = data?.users || [];
    console.log('MATCHES - allUsers:  ', allUsers);

    return (
        <div className="container z-depth-2">
            <div className="row grey lighten-3">
                {/* <h3 className="center">Match Name</h3>
                <div className="col s6 m6 l6">
                    <Suspense fallback={<div>Loading</div>}>
                        <MyImageComponent />
                    </Suspense>
                </div> */}
                <div>
                    {/* {usersData.map((data) => {
                        <UserCard />
                    })}; */}
                    {/* <p>{data}</p> */}
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <UserCard
                        // thoughts={thoughts}
                        allUsers={allUsers}
                    />
                    )}
                </div>

                {/* <div className="col s3 m3 l3">
                    <h4>Match Sign:</h4>
                    <h5 className="center">Leo!</h5>
                    <h5 className="center">♌️</h5>
                    <h4>Match Score:</h4>
                    <h5 className="center">90%</h5>
                </div>
                <div className="col s3 m3 l3">
                    <p className="paragraphs">It was a scrape that he hardly noticed. Sure, there was a bit of blood but it was minor compared to most of the other cuts and bruises he acquired on his adventures. There was no way he could know that the rock that produced the cut had alien genetic material on it that was now racing through his bloodstream. He felt perfectly normal and continued his adventure with no knowledge of what was about to happen to him.</p>
                </div>
                
                <div className="col s12 m12 l12 center">
                    <button style= {styles.button} className="sendChat waves-effect waves-light btn deep-purple lighten-1 btn-medium" id="sendChat">Send Chat</button>
                </div> */}
            </div>
        </div>

        
    )
}

export default Matches