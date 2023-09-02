// our-domain.com/aboutus/developer

import { useRouter } from "next/router";

const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },
  { id: 2, name: "Vaibhav", role: "Backend Developer" },
  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

function Developer() {
  const router = useRouter();
  const { id } = router.query;
  const teamMember = details.find((member) => member.id === parseInt(id));

  if (!teamMember) {
    return <h1>Developer doesn't exist</h1>;
  }

  return (
    <div>
      <h1>{teamMember.name}</h1>
      <h2>{teamMember.role}</h2>
    </div>
  );
}

export default Developer;
