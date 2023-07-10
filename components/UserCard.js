import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    solid,
    regular,
    brands,
    icon
} from '@fortawesome/fontawesome-svg-core/import.macro';

export default function UserCard({ directory }){
    const {name, firstname, slug, businessSector, schoolYear } = directory.fields
    return(
       
        <tr className="card"> 
         
            <th>{ directory.fields.firstname}</th>
            <th>{ directory.fields.name}</th>
            <th>{ directory.fields.businessSector}</th>
            <th>{ directory.fields.schoolYear}</th>
            <th>--</th>
            <th>
                <Link href={slug}>
                <FontAwesomeIcon icon={solid('circle-chevron-right')} size='1x'  />
                    </Link>
            </th>
        </tr>
        
    )
}