import { Student } from './student.model';

describe('student object model tests.', () => {
  let student: Student;

  /**
    * Tests that verify if the student object is correctly built.
  **/
  it('should build a student object correctly', () => {
    const id_college = 'A01207672';
    const name = 'Juan';
    const last_name = 'Hernández';
    const password = 'contrasena';
    const email = 'A01207672@itesm.mx';
    const phone = '4421112233';
    const birthday = new Date('1990-09-09').toString();
    const gender = 'Masculino';
    const nationality = 'Francés';
    const local = 'Local';
    const entry_date = new Date('2015-09-09').toString();

    student = {
      id_college: id_college,
      name: name,
      last_name: last_name,
      password: password,
      email: email,
      phone: phone,
      birthday: birthday,
      gender: gender,
      nationality: nationality,
      local: local,
      entry_date: entry_date
    };

    // Check each atrribute
    expect(student.id_college).toBe(id_college);
    expect(student.name).toBe(name);
    expect(student.last_name).toBe(last_name);
    expect(student.password).toBe(password);
    expect(student.email).toBe(email);
    expect(student.phone).toBe(phone);
    expect(student.birthday).toBe(birthday);
    expect(student.gender).toBe(gender);
    expect(student.nationality).toBe(nationality);
    expect(student.local).toBe(local);
    expect(student.entry_date).toBe(entry_date);
  });
});
