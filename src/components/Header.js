export default function Header({selectedMember}) { 
    return (
        <div>
            <h2>Data Analysis for Kids Club</h2>
            {selectedMember && <span>Games played by {selectedMember}</span>}
        </div>
    )
}