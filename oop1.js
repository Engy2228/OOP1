


class Student {
  constructor(age, name) {
    this.age = age
    this.name = name
    this.technologies = []
    this.status = 'Junior'
  }

    setTechnologies(technologies) {
      this.technologies = [...this.technologies, ...technologies];
	}

  setNewStatus(newStatus) {
    this.status = newStatus;
  }
  }
  

const student = new Student (20, 'Maxim');
student.setTechnologies([ 'HTML', 'CSS', 'JavaScript' ]);
student.setNewStatus('Middle');
console.log(student);

