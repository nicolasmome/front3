const [count, setCount] = useState(0);
const [phone, setPhone] = useState("");
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const Postmalo = () => {
    const estoEstaMal = () => {
    const [likes, setLikes] = useState(0); (incorrecto)
    }
    return <h3>{estoEstaMal}</h3>;
    };

const Post = () => {
const [likes, setLikes] = useState(0); (Correcto)
return <h3>{likes}</h3>;
;}