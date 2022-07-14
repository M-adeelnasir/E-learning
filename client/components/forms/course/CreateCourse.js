import React from 'react'
import { Select, Avatar } from 'antd'

const { Option } = Select
const CreateCourse = ({ setState, state, handleChange, handleSubmit, handleImage, preview, uploadBtnText }) => {

    const children = [];
    for (let i = 9.99; i <= 100.99; i++) {
        children.push(<Option key={i.toFixed(2)}>${i.toFixed(2)}</Option>)
    }

    const { name, loading, uploading, paid, description, imagePreview, price } = state

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input type="text" className="form-control" placeholder='Name' name='name' onChange={handleChange} value={name} />
            </div>
            <div className="form-group mt-3">
                <textarea className='form-control' name="description" cols="7" rows="6" placeholder='Description' onChange={handleChange} value={description}>
                </textarea>
            </div>

            <div className="form-row d-flex">
                <div className="col">
                    <div className="form-group mt-3">
                        <Select
                            name="paid"
                            style={{ width: '100%' }}
                            value={paid}
                            onChange={(v) => setState({ ...state, paid: !paid })}
                            size='large'
                        >
                            <Option value={true}>Paid</Option>
                            <Option value={false}>Free</Option>
                        </Select>
                    </div>
                </div>
                {paid &&
                    <div className="col-md-3 mt-3 ">
                        <Select
                            defaultValue="$9.99"
                            style={{ width: '100%' }}
                            name={price}
                            onChange={(v) => setState({ ...state, price: v })}
                            tokenSeparators={[,]}
                            size='large' >

                            {children}
                        </Select>
                    </div>
                }
            </div>

            <div className="d-flex w-0">
                <div className="form-group d-flex">
                    <label className='btn btn-primary mt-3'>
                        {uploadBtnText}
                        <input type="file" name="image" onChange={handleImage} accept='image/*' hidden />
                    </label>
                </div>
                {preview &&
                    <div className='mt-3 pl-5'>
                        <Avatar width={200} src={preview} />
                    </div>
                }
            </div>
            <div className="d-flex justify-content-center pb-5">
                <button className='mt-3 btn btn-outline-primary w-50 btn-block '>Save And Continue</button>

            </div>
        </form>
    )
}

export default CreateCourse