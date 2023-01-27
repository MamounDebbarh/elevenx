import { Button, Card, Grid, Input, Text, Textarea } from "@nextui-org/react";
import { useState } from "react";

const Home = () => {
  const [inputs, setInputs] = useState({
    name: "",
    title: "",
    company: "",
    industry: "",
    about: "",
  });
  const [output, setOutput] = useState("");

  const handleSubmit = () => {
    fetch("https://7bq02m4msg.execute-api.us-east-1.amazonaws.com/prod", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    })
      .then((response) => response.json())
      .then((data) => setOutput(data))
      .catch((error) => console.log(error));
  };

  return (
    <Grid.Container gap={5}>
      <Grid xs={12} md={6}>
        <Card>
          <Card.Body>
            <Grid.Container gap={2}>
              <Grid xs={12} md={6}>
                <Input
                  placeholder="name"
                  value={inputs.name}
                  size="lg"
                  onChange={(e) =>
                    setInputs({ ...inputs, name: e.target.value })
                  }
                />
              </Grid>
              <Grid xs={12} md={6}>
                <Input
                  placeholder="title"
                  value={inputs.title}
                  size="lg"
                  onChange={(e) =>
                    setInputs({ ...inputs, title: e.target.value })
                  }
                />
              </Grid>
              <Grid xs={12} md={6}>
                <Input
                  placeholder="company"
                  value={inputs.company}
                  size="lg"
                  onChange={(e) =>
                    setInputs({ ...inputs, company: e.target.value })
                  }
                />
              </Grid>
              <Grid xs={12} md={6}>
                <Input
                  placeholder="industry"
                  value={inputs.industry}
                  size="lg"
                  onChange={(e) =>
                    setInputs({ ...inputs, industry: e.target.value })
                  }
                />
              </Grid>
              <Grid xs={12}>
                <Textarea
                  width="90%"
                  minRows={4}
                  placeholder="about"
                  value={inputs.about}
                  size="lg"
                  onChange={(e) =>
                    setInputs({ ...inputs, about: e.target.value })
                  }
                />
              </Grid>
              <Grid xs={12}>
                <Button onClick={handleSubmit}>Submit</Button>
              </Grid>
            </Grid.Container>
          </Card.Body>
        </Card>
      </Grid>
      <Grid xs={12} md={6}>
        <Card>
          <Card.Body>
            <Text size="$xl" css={{ width: "90%" }}>
              {" "}
              {output}{" "}
            </Text>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  );
};

export default Home;
