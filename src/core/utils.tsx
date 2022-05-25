export const emailValidator = (email: string) => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return 'E-Mail darf nicht leer sein.';
  if (!re.test(email)) return 'Hoppla! Wir benötigen eine gültige E-Mail-Adresse.';

  return '';
};

export const passwordValidator = (password: string) => {
  if (!password || password.length <= 0) return 'Passwort kann nicht leer sein.';

  return '';
};

export const nameValidator = (name: string) => {
  if (!name || name.length <= 0) return 'Der Name darf nicht leer sein.';

  return '';
};
