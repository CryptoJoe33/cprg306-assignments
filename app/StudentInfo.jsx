import Link from 'next/link';

export default function MyInfo(){
    return (
        <div className = "m-3 float-left">
            <h1>Joey Adam</h1>
            <h1>CPRG 306</h1>
            <Link href ="https://github.com/CryptoJoe33">Github</Link>
        </div>
    );
}