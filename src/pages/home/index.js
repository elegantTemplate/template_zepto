import '../../css/common.scss'
import './index.scss'

import { test } from '../../components/utils/api'

test().then(res => {
    console.log(res)
})

