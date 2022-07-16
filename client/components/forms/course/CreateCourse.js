import React from 'react'
import { Select, Avatar, Button, Badge } from 'antd'

const { Option } = Select
const CreateCourse = ({ setState, state, handleChange, handleSubmit, handleImage, preview, uploadBtnText, handleImageReomve }) => {

    const children = [];
    for (let i = 9.99; i <= 100.99; i++) {
        children.push(<Option key={i.toFixed(2)}>${i.toFixed(2)}</Option>)
    }

    const { name, loading, uploading, paid, description, imagePreview, price, level } = state

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
                            onChange={(v) => setState({ ...state, paid: v, price: 0 })}
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

            <div className="form-group mt-3">
                <Select
                    name="level"
                    style={{ width: '100%' }}
                    value={level}
                    onChange={(v) => setState({ ...state, level: v })}
                >

                    <Option value="Beginner"></Option>
                    <Option value="Intermediate"></Option>
                    <Option value="Advance"></Option>
                    <Option value="All levels"></Option>
                </Select>
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
                        <Badge count="X" onClick={handleImageReomve} style={{ cursor: "pointer" }}>
                            <Avatar width={64} src={preview} />
                        </Badge>
                    </div>
                }
            </div>

            <div className="d-flex justify-content-center pb-5">
                {/* <button className='mt-3 btn btn-outline-primary w-50 btn-block '>Save And Continue</button> */}
                <Button shape='round' disabled={loading || uploading} type="primary" size="large" onClick={handleSubmit} loading={loading}>
                    {loading ? "Saving..." : "Save and Countinue"}
                </Button>
            </div>
        </form>
    )
}

export default CreateCourse