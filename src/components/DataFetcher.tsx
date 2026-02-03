import { useEffect, useState } from "react";



interface Post{
    id:number;
    title: string
}

export const DataFetcher: React.FC = () => {
    const [data, setData] = useState<Post | null>(null);
    const [loading, setLoading] = useState<boolean>(true);


    // * useEffect is a React Hook that lets you perform side effects in your components. 
    // * Side effects are operations that interact with the outside world, such as fetching data, updating the DOM, or setting up subscriptions.    


    useEffect(() =>{
        console.log("Component Mounted: Fetching data...");
        // Simulating an API call with a timeout

        const timer = setTimeout(() => {
            setData({id: 1, title: 'Hello from the Server!'});
            setLoading(false);
            console.log('Data fetched and state updated')
        }, 2000)


        // ! Optional: Cleanup if the component is removed before data arrives
        
        
        return () => clearTimeout(timer);
        
    }, []); // Empty array means "Run once on mount"

    return(
        <div style={styles.card}>
            <h3>📥 Data Fetcher</h3>
            {loading ? (
                <p>Loading data...</p>
            ): (
                <p> <strong>Result:</strong> {data?.title}</p>
            )};

        </div>
    );

};
const styles = {
  card: {
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
    backgroundColor: '#f9f9f9'
  }
} as const;