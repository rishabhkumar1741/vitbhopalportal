export default function login_validate(values) {
    const errors = {}
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if(!values.password)
    {
        errors.password="Required";
    }
    else if(values.password.length<8||values.password.length>20)
    {
        errors.password="Must be greater then 8 and less then 20 characters long"
    }
    else if(values.password.includes(" "))
    {
        errors.password="Invalid Password"
    }

    return errors;
}


export function registerValidate(values)
{
    const errors = {};
    if(!values.fname)
    {
        errors.fname="Required";
    }
    else if(values.fname.includes(" "))
    {
        errors.fname="Invalid First Name"
    }

    if(!values.lname)
    {
        errors.lname="Required";
    }
    else if(values.lname.includes(" "))
    {
        errors.lname="Invalid First Name"
    }

    if(!values.city)
    {
        errors.city="Required";
    }
    else if(values.city.includes(" "))
    {
        errors.city="Invalid City Name"
    }

    if(!values.zip)
    {
        errors.zip="Required";
    }
    else if(values.zip.includes(" "))
    {
        errors.zip="Invalid Zip Name"
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if(!values.password)
    {
        errors.password="Required";
    }
    else if(values.password.length<8||values.password.length>20)
    {
        errors.password="Must be greater then 8 and less then 20 characters long"
    }
    else if(values.password.includes(" "))
    {
        errors.password="Invalid Password"
    }
    return errors;

}

