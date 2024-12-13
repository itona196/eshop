import { Card, CardContent} from "@/components/ui/card";

export default function HomePage() {

  return (

    <div className="flex  items-center h-screen">
      <Card className="bg-esteban h-400 w-400" >

  <CardContent>
    <p>Hommes</p>
  </CardContent>

</Card>

<Card className="bg-esteban h-400 w-400">

  <CardContent>
    <p>Femmes</p>
  </CardContent>

</Card>
<Card className="bg-esteban h-400 w-400">

  <CardContent>
    <p>Enfants</p>
  </CardContent>

</Card>
    </div>


    
  );
}


