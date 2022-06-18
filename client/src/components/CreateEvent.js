import { Button, Form, Input } from 'antd';
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 0,
        span: 16,
    },
};

export const CreateEvent = () => {



    const onFinish = (values) => {
        console.log(values);
    };


    return (
        <div style={ styles.outerContainer } >
            <Form style={ styles.formContainer } { ...layout } name="createEvent" onFinish={ onFinish } layout="vertical" >
                <Form.Item name="title" label="Title"  >
                    <Input placeholder='Enter event title' />
                </Form.Item>

                <Form.Item name="description" label="Description">
                    <Input placeholder='Enter event description' />
                </Form.Item>

                <Form.Item name="date" label="Event Date">
                    <Input placeholder='Enter date in the format mm.dd.yyyy' />

                </Form.Item>

                <Form.Item { ...tailLayout }>
                    <Button type="primary" htmlType="submit">
                        Add Event
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

const styles = {
    outerContainer: {
        backgroundColor: "#eaecef",
        width: 500
    },
    formContainer: {
        padding: 24
    }
};