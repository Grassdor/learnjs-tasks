function getAverageAge(users) {
    let usersCount = users.length;

    averageAge = 0;

    for (obj of users) {
        averageAge += obj.age;
    }

    return averageAge / usersCount;
}