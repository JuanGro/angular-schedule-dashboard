import { User } from './user.model';

describe('User object model tests.', () => {
  let user: User;

  /**
    * Tests that verify if the User object is correctly built.
  **/
  it('shoudl build a user object correctly', () => {
    const id_college = 'A01207672';
    const name = 'Juan';
    const last_name = 'Hernández';
    const password = 'contrasena';
    const email = 'A01207672@itesm.mx';
    const phone = '4421112233';
    const birthday = new Date('1990-09-09').toString();
    const gender = 'Masculino';

    user = {
      id_college: id_college,
      name: name,
      last_name: last_name,
      password: password,
      email: email,
      phone: phone,
      birthday: birthday,
      gender: gender
    };

    // Check each atrribute
    expect(user.id_college).toBe(id_college);
    expect(user.name).toBe(name);
    expect(user.last_name).toBe(last_name);
    expect(user.password).toBe(password);
    expect(user.email).toBe(email);
    expect(user.phone).toBe(phone);
    expect(user.birthday).toBe(birthday);
    expect(user.gender).toBe(gender);
  });
});
