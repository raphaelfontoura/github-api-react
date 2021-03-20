import React, { useEffect, useState } from 'react';
import Button from '../../core/components/Button';
import ImageLoader from '../../core/components/Loaders/ImageLoader';
import InfoLoader from '../../core/components/Loaders/InfoLoader';
import './styles.css';

type User = {
    company?: string;
    blog?: string;
    location?: string;
    created_at?: string;
    repositories?: number;
    following?: number;
    followers?: number;
    avatar_url?: string;
    html_url?: string;
}

const Search = () => {
    const [githubUser, setGithubUser] = useState('');
    const [user, setUser] = useState<User>({});

    useEffect(() => {
        
    }, [])

    const handleInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setGithubUser(target.value);
    }

    const handleClick = () => {
        fetch(`/users/${githubUser}`)
            .then(result => result.json())
            .then(data => setUser(data));
    }

    return (
        <div className="container">
            <div className="box-search">
                <div>
                    <h1>Encontre um perfil Github</h1>
                    <input
                        value={githubUser}
                        type="text"
                        placeholder="Usuário Github"
                        className="input-search"
                        onChange={handleInput}
                    />
                </div>
                <span onClick={handleClick}>
                    <Button text="Encontrar" />
                </span>
            </div>
            <div className="info">
                {user.avatar_url === undefined &&
                    <div className="loaders">
                        <ImageLoader />
                        <InfoLoader />
                    </div>
                }
                {user.avatar_url !== '' &&
                    <h1>{user.location}</h1>
                }
            </div>
        </div>
    );
}

export default Search;