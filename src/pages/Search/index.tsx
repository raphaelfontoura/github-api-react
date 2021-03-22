import React, { useState } from 'react';
import Button from 'core/components/Button';
import { User } from 'core/models/User';
import InfoBox from './InfoBox';
import LoaderBox from './Loader';
import './styles.css';
import { toast } from 'react-toastify';


const Search = () => {
    const [inputUser, setInputUser] = useState('');
    const [userLoad, setUserLoad] = useState<User>({});
    const [isLoading, setIsLoading] = useState(false);
    const [showBox, setShowBox] = useState(false);

    const handleInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setInputUser(target.value);
    }

    const handleInputEnter = (event : React.KeyboardEvent<HTMLInputElement>) => {
        if(event.code === "Enter") {
            handleClick();
        }
    }

    const handleClick = () => {
        setIsLoading(true);
        setShowBox(true);
        fetch(`https://api.github.com/users/${inputUser}`)
            .then(result => {
                if (result.ok) {
                    result.json().then(data => setUserLoad(data));
                } else {
                    setShowBox(false);
                    result.json().then(err => {
                        toast(`Desculpe. Um erro ocorreu: "${err.message}"`);
                        console.log(err);
                    });
                }
            });
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
                        onKeyDown={handleInputEnter}
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