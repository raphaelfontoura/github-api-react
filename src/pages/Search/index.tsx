import React, { useState } from 'react';
import Button from 'core/components/Button';
import { User } from 'core/models/User';
import InfoBox from './InfoBox';
import LoaderBox from './Loader';
import './styles.css';


const Search = () => {
    const [inputUser, setInputUser] = useState('');
    const [userLoad, setUserLoad] = useState<User>({});
    const [isLoading, setIsLoading] = useState(false);
    const [showBox, setShowBox] = useState(false);

    const handleInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setInputUser(target.value);
    }

    const handleClick = () => {
        setIsLoading(true);
        setShowBox(true);
        fetch(`/users/${inputUser}`)
            .then(result => result.json())
            .then(data => setUserLoad(data));
        setIsLoading(false);
    }

    return (
        <div className="container">
            <div className="box-search">
                <div>
                    <h1>Encontre um perfil Github</h1>
                    <input
                        value={inputUser}
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
            {showBox &&
                <div className="info">
                    {isLoading &&
                        <LoaderBox />
                    }
                    {!isLoading &&
                        <InfoBox userData={userLoad} />
                    }
                </div>
            }
        </div>
    );
}

export default Search;