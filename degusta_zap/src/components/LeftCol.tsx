// URL da API
// const apiUrl = import.meta.env.VITE_API_URL;

// React
import { useState } from "react";

// React Router
// import { useNavigate } from "react-router-dom";

// Importar Axios
import axios from 'axios'; // Importar axios

// Componentes do shadcn/ui
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

// Componentes do Lucide React
import { Eye, EyeOff, ArrowRight, Lock } from "lucide-react";

// Ícones do fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons'

// Motion
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// URL da API
const apiUrl = import.meta.env.VITE_API_URL;

const LeftCol = () => {

    // Visibilidade da Senha
    const [showPassword, setShowPassword] = useState(false);

    // Estados do Formulário de Login
    const [signInEmail, setSignInEmail] = useState("");
    const [signInPassword, setSignInPassword] = useState("");

    // Estados do Formulário de Cadastro
    const [signUpName, setSignUpName] = useState("");
    const [signUpEmail, setSignUpEmail] = useState("");
    const [signUpPassword, setSignUpPassword] = useState("");

    // Navegação
    const navigate = useNavigate();

    // // Manipular Login
    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        // console.log("Tentativa de Login", {
        //     email: signInEmail,
        //     password: signInPassword,
        // });

        try {

            // Enviar credenciais para o servidor para autenticação
            const response = await axios.post(`${apiUrl}/api/login`, {
                email: signInEmail,
                password: signInPassword
            });
            console.log(signUpEmail, signInPassword);

            // Salvar o token no localStorage
            localStorage.setItem("token", response.data.token);

            // Redirecionar para a página inicial
            navigate("/home");

        } catch (error) {
            console.log("Erro no login", error);
            alert("Falha no login. Tente novamente.")
        }
    }

    // Manipular Cadastro
    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        // console.log("Tentativa de Cadastro", {
        //     name: signUpName,
        //     email: signUpEmail,
        //     password: signUpPassword,
        // });

        try {

            // Enviar uma requisição POST para o servidor para registrar o usuário
            const response = await axios.post(`${apiUrl}/api/register`, {
                username: signUpName,
                email: signUpEmail,
                password: signUpPassword
            });

            // Salvar o token no localStorage
            localStorage.setItem("token", response.data.token);

            // Navegar para a página inicial após o cadastro bem-sucedido
            navigate("/home");
        } catch (error) {
            console.log("Erro ao registrar usuário: ", error);
            alert("E-mail ou nome de usuário já existe. Tente novamente.");
        }
    }

    return (
        <div className='flex w-full h-screen justify-center items-center bg-[#ea5455]'>

            <div className="bg-[#f5f5f5] p-6 w-full max-w-[600px] space-y-8 border-2 border-gray-200 rounded-lg">

                {/* Cabeçalho */}
                <div className="text-center space-y-8">
                    <div className="w-16 h-16 mx-auto bg-[#ea5455] rounded-2xl flex items-center justify-center">
                        <Lock className="w-8 h-8 text-[#fafafa]" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-black"> Bem Vindo(a) ao DegustaZap </h1>
                        <p className="text-[#1d1d1d] font-light mt-3"> Entre com sua conta ou crie uma. </p>
                    </div>
                </div>

                {/* Divider
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-glass-border" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-6 text-gray-300"> Cadastre-se ou </span>
                    </div>
                </div> */}

                {/* Formulário de autenticação com abas */}
                <Card className="p-2 border-0 bg-white/80 backdrop-blur-sm">
                    <Tabs defaultValue="signin" className="w-full">

                        <TabsList className="grid w-full grid-cols-2 mb-6">
                            <TabsTrigger value="signin" className="cursor-pointer font-light data-[state=active]:bg-transparent data-[state=active]:text-black p-2 rounded-full text-lg font-light">Entrar</TabsTrigger>
                            <TabsTrigger value="signup" className="cursor-pointer font-light data-[state=active]:border data-[state=active]:border-[#ea5455] data-[state=active]:bg-[#ea5455] data-[state=active]:text-white data-[state=active]:font-light p-2 rounded-full text-lg">Criar conta</TabsTrigger>
                        </TabsList>

                        {/* Formulário de Login */}
                        <TabsContent value="signin" className="space-y-6 mt-6">

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                            >

                                {/* Formulário de Login */}
                                <form onSubmit={handleSignIn} className="space-y-6">

                                    {/* Campo de E-mail */}
                                    <div className="space-y-2">
                                        <Label htmlFor="signin-name" className="text-sm font-medium text-gray-700">
                                            Digite seu E-mail
                                        </Label>

                                        <div className="relative">
                                            {/* <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" /> */}
                                            <FontAwesomeIcon icon={faUser} className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                                            <Input
                                                id="signin-email"
                                                type="text"
                                                value={signInEmail}
                                                onChange={(e) => setSignInEmail(e.target.value)}
                                                placeholder="Entre com seu e-mail"
                                                className="pl-10 h-12"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Campo de Senha */}
                                    <div className="space-y-2">
                                        <Label htmlFor="signin-password" className="text-sm font-medium text-gray-700">
                                            Digite sua senha
                                        </Label>

                                        <div className="relative">
                                            {/* <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" /> */}
                                            <FontAwesomeIcon icon={faLock} className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                                            <Input
                                                id="signin-password"
                                                type={showPassword ? "text" : "password"}
                                                value={signInPassword}
                                                onChange={(e) => setSignInPassword(e.target.value)}
                                                placeholder="Entre com sua senha"
                                                className="pl-10 h-12"
                                                required
                                            />

                                            <Button
                                                variant="ghost"
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3 top-2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                                            >
                                                {showPassword ? (
                                                    <EyeOff className="h-5 w-5" />
                                                ) : (
                                                    <Eye className="h-5 w-5" />
                                                )}
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Termos e Condições */}
                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500/20 mt-0.5 cursor-pointer"
                                            required
                                        />
                                        <span className="text-gray-600"> Li e concordo com os <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors hover:underline"> Termos e Condições </a></span>
                                    </div>

                                    {/* Botão de Envio */}
                                    <button
                                        type="submit"
                                        className="w-full h-12 bg-[#ea5455] text-white text-lg font-medium transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] group cursor-pointer rounded-full"
                                    >
                                        Entrar para a página principal
                                    </button>
                                </form>

                            </motion.div>
                        </TabsContent>

                        {/* Formulário de Cadastro */}
                        <TabsContent value="signup" className="space-y-6 mt-6">

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                            >

                                <form onSubmit={handleSignUp} className="space-y-6">

                                    {/* Campo de Nome */}
                                    <div className="space-y-2">
                                        <Label htmlFor="signup-name" className="text-sm font-medium text-gray-700">
                                            Digite seu nome
                                        </Label>

                                        <div className="relative">
                                            {/* <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" /> */}
                                            <FontAwesomeIcon icon={faUser} className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                                            <Input
                                                id="signup-name"
                                                type="text"
                                                value={signUpName}
                                                onChange={(e) => setSignUpName(e.target.value)}
                                                placeholder="Entre com seu nome"
                                                className="pl-10 h-12"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Campo de E-mail */}
                                    <div className="space-y-2">
                                        <Label htmlFor="signup-email" className="text-sm font-medium text-gray-700">
                                            Digite seu e-mail
                                        </Label>

                                        <div className="relative">
                                            {/* <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" /> */}
                                            <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                                            <Input
                                                id="signup-email"
                                                type="email"
                                                value={signUpEmail}
                                                onChange={(e) => setSignUpEmail(e.target.value)}
                                                placeholder="Entre com seu e-mail"
                                                className="pl-10 h-12"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Campo de Senha */}
                                    <div className="space-y-2">
                                        <Label htmlFor="signup-password" className="text-sm font-medium text-gray-700">
                                            Digite sua senha
                                        </Label>

                                        <div className="relative">
                                            {/* <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" /> */}
                                            <FontAwesomeIcon icon={faLock} className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                                            <Input
                                                id="signup-password"
                                                type={showPassword ? "text" : "password"}
                                                value={signUpPassword}
                                                onChange={(e) => setSignUpPassword(e.target.value)}
                                                placeholder="Entre com sua senha"
                                                className="pl-10 pr-10 h-12"
                                                required
                                            />

                                            <Button
                                                variant="ghost"
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3 top-2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                                            >
                                                {showPassword ? (
                                                    <EyeOff className="h-5 w-5" />
                                                ) : (
                                                    <Eye className="h-5 w-5" />
                                                )}
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Termos e Condições */}
                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500/20 mt-0.5 cursor-pointer"
                                            required
                                        />
                                        <span className="text-gray-600">Li e concordo com os <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors hover:underline">Termos e Condições</a></span>
                                    </div>

                                    {/* Botão de Envio */}
                                    <button
                                        type="submit"
                                        className="w-full h-12 bg-[#ea5455] text-white text-lg font-medium transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] group cursor-pointer rounded-full"
                                    >
                                        Criar conta
                                    </button>
                                </form>

                            </motion.div>
                        </TabsContent>
                    </Tabs>
                </Card>
            </div>
        </div>
    );
}

export default LeftCol;
