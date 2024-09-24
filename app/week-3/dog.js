export default function Dog({ name, age, breed, colour }) {
    return (
            <section className="m-2 bg-neutral-100">
                <h3 className="text-xl font-bold text-violet-900">{name}</h3>
                <p>Age: {age}</p>
                <p>
                    <span className="font-bold">Breed:</span> {breed}</p>
                <p>Color: {colour}</p>
            </section> 
            );
}