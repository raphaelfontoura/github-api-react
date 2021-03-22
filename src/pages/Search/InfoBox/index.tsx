import Button from 'core/components/Button';
import { User } from 'core/models/User';
import { formatDate } from 'core/utils/formatDate';
import './styles.css';

type Props = {
    userData: User;
}

const InfoBox = ({userData}: Props) => (
    <div className="flex-box">
        <div className="info-img-btn">
            <img src={userData.avatar_url} alt={userData.name} className="user-img" />
            <a href={userData.html_url} target="blank">
                <Button text="Ver perfil" />
            </a>
        </div>
        <div className="flex-github-infos">
            <div className="github-numbers">
                <span>Repositórios públicos: {userData.public_repos}</span>
                <span>Seguidores: {userData.followers}</span>
                <span>Seguindo: {userData.following}</span>
            </div>
            <div className="github-data">
                <h6 className="title-infos">Informações</h6>
                <span>
                    <b>Empresa: </b> {userData.company}
                </span>
                <span>
                    <b> WebSite/Blog: </b> {userData.blog}
                </span>
                <span>
                    <b> Membro desde: </b> {formatDate(userData.created_at)}
                </span>
            </div>
        </div>
    </div>
);

export default InfoBox;