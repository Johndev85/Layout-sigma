fetch("https://sigma-studios.s3-us-west-2.amazonaws.com/test/colombia.json")
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
    })
