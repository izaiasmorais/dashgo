import * as yup from "yup";

export const createUserFormSchema = yup.object().shape({
	name: yup.string().required("Nome Obrigatório"),
	email: yup
		.string()
		.required("Email obrigatório")
		.email("Digite um endereço de email válido"),
	password: yup
		.string()
		.required("Senha obrigatória")
		.min(6, "No mínimo 6 caracteres"),
	password_confirmation: yup
		.string()
		.oneOf([null, yup.ref("password")], "As senhas precisam ser iguais"),
});
