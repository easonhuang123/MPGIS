import React, { Component } from 'react'
import './style.less'
import HeaderBar from '../../components/HeaderBar'
import StationList from '../../components/StationList'
import StationSelector from '../../components/StationSelector'
import Card from '../../components/Card'
import { inject, observer } from 'mobx-react'
import http from '../../api/http'

@inject('mapStore')
@observer
class Around extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nodelist: [
                ['罗湖站', '国贸站', '老街站', '大剧院站', '红岭南', '科学馆站', '华强路站', '岗厦站', '会展中心站', '购物公园站', '香蜜湖站', '车公庙站', '竹子林站', '侨城东站', '华侨城站', '世界之窗站', '白石洲站', '高新园站', '深大站', '桃园站', '大新站', '鲤鱼门站', '前海湾站', '新安站', '宝安中心站', '宝体站', '坪洲站', '西乡站', '固戍站', '后瑞站', '机场东站'],
                ['赤湾站', '蛇口港站', '海上世界站', '水湾站', '东角头站', '湾厦站', '海月站', '登良站', '后海站', '科苑站', '红树湾站', '世界之窗站', '侨城北站', '深康站', '安托山站', '侨香站', '香蜜站', '香梅北站', '景田站', '莲花西站', '福田站', '市民中心站', '岗厦北站', '华强北站', '燕南站', '大剧院站', '湖贝站', '黄贝岭站', '新秀站'],
                ['益田站', '石厦站', '购物公园站', '福田站', '少年宫站', '莲花村站', '华新站', '通新岭站', '红岭站', '老街站', '晒布站', '翠竹站', '田贝站', '水贝站', '草埔站', '布吉站', '木棉湾站', '大芬站', '丹竹头站', '六约站', '塘坑站', '横岗站', '永湖站', '荷坳站', '大运站', '爱联站', '吉祥站', '龙城广场站', '南联站', '双龙站']
            ],
            show: false,
            node: '',
            food: [],
            hotel: [],
            shopping: []
        }
        this.showlist = this.showlist.bind(this)
        this.choosenode = this.choosenode.bind(this)
        this.renderList = this.renderList.bind(this)
        this.getAddress = this.getAddress.bind(this)
    }

    componentDidMount () {
        this.getAddress('深大站')
    }

    showlist (key) {
        this.setState({
            show: true
        })
    }

    choosenode (node) {
        this.setState({
            show: false,
            node
        })
        this.getAddress(node)
    }

    getAddress (node) {
        http.post(`http://restapi.amap.com/v3/geocode/geo?key=7f794c73a70f7476572d350b7653562a&address=${node}&city=深圳`)
        .then(data => {
            this.renderList(data.data.geocodes[0].location)
        })
        .catch(err => {
            alert(err)
        })
    }

    renderList (location) {
        let lng = location.split(',')[0]
        let lat = location.split(',')[1]
        http.post(`http://restapi.amap.com/v3/geocode/regeo?key=7f794c73a70f7476572d350b7653562a&location=${lng},${lat}&poitype=综合酒楼&radius=1500&extensions=all&batch=false&roadlevel=0`)
        .then(data => {
            this.setState({
                food: data.data.regeocode.pois
            })
        })
        .catch(err => {
            alert(err)
        })
        http.post(`http://restapi.amap.com/v3/geocode/regeo?key=7f794c73a70f7476572d350b7653562a&location=${lng},${lat}&poitype=宾馆酒店&radius=1500&extensions=all&batch=false&roadlevel=0`)
        .then(data => {
            this.setState({
                hotel: data.data.regeocode.pois
            })
        })
        .catch(err => {
            alert(err)
        })
        http.post(`http://restapi.amap.com/v3/geocode/regeo?key=7f794c73a70f7476572d350b7653562a&location=${lng},${lat}&poitype=购物中心&radius=1500&extensions=all&batch=false&roadlevel=0`)
        .then(data => {
            this.setState({
                shopping: data.data.regeocode.pois
            })
        })
        .catch(err => {
            alert(err)
        })
    }

    render () {
        const FoodList = this.state.food.map((item, index) => {
            if (index <= 5) {
                return (
                    <p key={index} className="around__item">{item.name}</p> 
                )
            }
        })
        const HotelList = this.state.hotel.map((item, index) => {
            if (index <= 5) {
                return (
                    <p key={index} className="around__item">{item.name}</p> 
                )
            }
        })
        const ShoppingList = this.state.shopping.map((item, index) => {
            if (index <= 5) {
                return (
                    <p key={index} className="around__item">{item.name}</p> 
                )
            }
        })
        return (
            <div className='around'>
                <HeaderBar title='地铁口周边信息查询'/>
                <StationSelector station={this.state.node} showlist={this.showlist}/>
                <div className='around__list'>
                    <Card title='美食' type='food'>
                    {FoodList}
                    </Card>
                    <Card title='酒店' type='hotel'>
                    {HotelList}
                    </Card>
                    <Card title='商城' type='list'>
                    {ShoppingList}
                    </Card>
                </div>
                {!!this.state.show &&
                    <StationList nodelist={this.state.nodelist}
                                 choosenode={this.choosenode}/>
                }
            </div>
        )
    }
}

export default Around