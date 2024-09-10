import axios from 'axios';

enum AboutUser {
      id,
      firstName,
      lastName,
      maidenName,
      age,
      gender,
      email,
      phone,
      username,
      password,
      birthDate,
      image,
      bloodGroup,
      height,
      weight,
      eyeColor,
}

interface Root {
      id: number
      firstName: string
      lastName: string
      maidenName: string
      age: number
      gender: string
      email: string
      phone: string
      username: string
      password: string
      birthDate: string
      image: string
      bloodGroup: string
      height: number
      weight: number
      eyeColor: string
      hair: {
            color: string
            type: string
      }
      ip: string
      address: Address
      macAddress: string
      university: string
      bank: Finance
      company: Company
      ein: string
      ssn: string
      userAgent: string
      crypto: Crypto
      role: string
}

interface Address {
      address: string
      city: string
      state: string
      stateCode: string
      postalCode: string
      coordinates: {
            lat: number
            lng: number
      }
      country: string
}


interface Finance {
      cardExpire: string
      cardNumber: string
      cardType: string
      currency: string
      iban: string
}

interface Company {
      department: string
      name: string
      title: string
      address: Address
}

interface Crypto {
      coin: string
      wallet: string
      network: string
}

interface Res {
      users: Root[]
}

const url: string = 'https://dummyjson.com/users'

async function get(URL: string): Promise<Res> {

      try {
            const { data } = await axios.get<Res>(URL)     
            return data  

      } catch (error) {

            if (error) { 
                  console.error('Ошибка:', error);
            }   

            throw  Error('Не удалось получить данные пользователя');
      }
   
}

let resut = await get(url)
console.log(resut);
