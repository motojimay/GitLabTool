import { ButtonGroup, Button } from '@mui/material'

export default function CustomButtonGroup(props) {
    return (
        <ButtonGroup>
            {props.buttonInfos
                .map((bottonInfo) => <Button>{buttonInfo.buttonName}</Button>)}
        </ButtonGroup>
    );
}