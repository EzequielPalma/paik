import Column from "./Column";

export default function ColumnsRec() {
  return (
    <>

      <Column position="54 0 10"/>
      <Column position="44 0 20"/>
      <Column position="34 0 30"/>
      <Column position="24 0 40" />
      <Column position="14 0 50" />
      <Column position="4 0 60"/>

      <Column position="-6 0 50"/>
      <Column position="-16 0 40"/>
      <Column position="-26 0 30"/>
      <Column position="-36 0 20"/>
      <Column position="-46 0 10"/>
      <Column position="-56 0 0"/>

      <Column position="-46 0 -10"/>
      <Column position="-36 0 -20"/>
      <Column position="-26 0 -30"/>
      <Column position="-16 0 -40"/>
      <Column position="-6 0 -50"/>
      <Column position="4 0 -60"/>

      <Column position="14 0 -50"/>
      <Column position="24 0 -40"/>
      <Column position="34 0 -30"/>
      <Column position="44 0 -20"/>
      <Column position="54 0 -10"/>
      <Column position="64 0 0"/>
    </>
  )
}
