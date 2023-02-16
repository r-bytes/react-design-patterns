import type { NextPage } from 'next'
import { LargePersonListItem, LargeProductListItem, Modal, NumberedList, RegularList, SmallPersonListItem, SplitScreen } from "@components/index"

const Home: NextPage = () => {
    const people = [{
        name: 'John Doe',
        age: 54,
        hairColor: 'brown',
        hobbies: ['swimming', 'bicycling', 'video games'],
    }, {
        name: 'Brenda Smith',
        age: 33,
        hairColor: 'black',
        hobbies: ['golf', 'mathematics'],
    }, {
        name: 'Jane Garcia',
        age: 27,
        hairColor: 'blonde',
        hobbies: ['biology', 'medicine', 'gymnastics'],
    }];
    
    const products = [{
        name: 'Flat-Screen TV',
        price: '$300',
        description: 'Huge LCD screen, a great deal',
        rating: 4.5,
    }, {
        name: 'Basketball',
        price: '$10',
        description: 'Just like the pros use',
        rating: 3.8,
    }, {
        name: 'Running Shoes',
        price: '$120',
        description: 'State-of-the-art technology for optimum running',
        rating: 4.2,
    }];

    // components
    const LeftHandComponent = () => {
        return <h1 className="bg-black text-white text-3xl"> Left! </h1>
    }

    const RightHandComponent = () => {
        return <h1 className="bg-red-600 text-white text-3xl"> Right! </h1>
    }
    
    return (
        <>
            <SplitScreen
                // left={LeftHandComponent}
                leftWeight={1}
                // right={RightHandComponent}
                rightWeight={3}
            >
                <LeftHandComponent />
                <RightHandComponent />
            </SplitScreen>

            <RegularList
                items={people}
                itemResourceName={"person"}
                itemComponent={SmallPersonListItem}
            />

            <RegularList
                items={people}
                itemResourceName={"person"}
                itemComponent={LargePersonListItem}
            />

            <NumberedList
                items={products}
                itemResourceName={"product"}
                itemComponent={LargeProductListItem}
            />
            <Modal>
                <LargeProductListItem product={products[0]} />
            </Modal>
        </>
    )
}

export default Home