import React , {useEffect , useState} from 'react'
import {Box , VStack , Heading , Image , Text, HStack, Button} from "@chakra-ui/react"
import {Link} from "react-router-dom"

const ExecutedProposalTile = ({tokenURI , proposalid , yesvotes , novotes , state}) => {

    const [name , setname] = useState();
    const [image , setimage] = useState('')

    useEffect(() => {
        const fetchMetadata = async () => {
          try {
            // alert(tokenURI)
            const response = await fetch(`https://ipfs.io/ipfs/${tokenURI}/metadata.json`);
            const metadata = await response.json();
            console.log(metadata.text())
            setname(metadata.name)
            setimage(image)

            
          } catch (error) {
            console.error('Error fetching metadata:', error);
          }
        }
        fetchMetadata();
    }, [tokenURI]);
  
  return (
    <Box key={tokenURI}>
    {
      tokenURI !== "" ?
    
    
    <Link to={`/activeproposals/${proposalid.toString()}`} target='_blank'  key={proposalid.toString()}>
    <VStack
      maxW={"400"}
      maxh={"200"}
      shadow={"lg"}
      p={"10"}
      bg={'#F5F4E4'}
      transition={"all 0.3s"}
      m={"6"}
      borderWidth={'3px'}
      borderRadius={'10px'}
      borderColor={'rgba(0, 0, 0, 0.53)'}
      transitionDelay={'15ms'}
      css={{
        "&:hover": {
          transform: "scale(1.02)",
          boxSshadow:' 1px 1px 1px #111'
        
        },
      }}
    >
      <Heading size={"md"} noOfLines={1} fontWeight={'500'} color={'rgba(0, 0, 0, 0.53)'}>
        TOKEN ID: {proposalid.toString()}
      </Heading>
      <Image
        src={image}
        w={"50"}  
        h={"50"}
        objectFit={"contain"}
        alt={name}
      />
      <Heading size={"md"} noOfLines={2} fontWeight={'500'} color={'rgba(0, 0, 0, 0.53)'}>
      { name ? name.toUpperCase() : 'Loading...'}
      </Heading>
      <HStack>
      <Text noOfLines={1} color={'green'} size='lg'>{yesvotes}</Text>
      <Text noOfLines={1} color={'red'} size='lg'>{novotes}</Text>
      </HStack>
      {state ?  <Text noOfLines={1} color={'green'} size='2xl'>Succesfull Proposal</Text> :  <Text noOfLines={1} color={'red'} size='2xl'>UnSuccesfull Proposal</Text>  }

     
     
      </VStack>
  </Link>:
  <div></div>
    }
    </Box>
  )
}

export default ExecutedProposalTile