import React, { useState } from 'react';
import Button from '../../core/components/Button';
import ImageLoader from '../../core/components/Loaders/ImageLoader';
import InfoLoader from '../../core/components/Loaders/InfoLoader';
import './styles.css';


const Search = () => {
    const [githubUser, setGithubUser] = useState('');

    const handleInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setGithubUser(target.value);
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
                <Button text="Encontrar" />
            </div>
            <div className="info">
                <div className="loaders">
                    <ImageLoader />
                    <InfoLoader />
                </div>
            </div>
        </div>
    );
}

export default Search;