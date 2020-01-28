import React from 'react';

import Link from 'next/link';

const Home = () => (
    <div>
        <h1>Hello World</h1>
        <Link href="/users">
            <a>Usuarios</a>
        </Link>
    </div>        
);

export default Home;